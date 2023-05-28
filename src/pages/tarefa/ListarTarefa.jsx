import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Modal, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import CriarTarefa from "./CriarTarefa";
import EditarTarefa from "./EditarTarefa";

//A função abaixo é usada para criar o array contendo os dados iniciais da listagem de tarefas.
function createData(
  id: number,
  tituloTarefa: string,
  descricaoTarefa: string,
  inicioTarefa: string,
  fimTarefa: string,
  statusTarefa: string,
  recursoTarefa: string
) {
  return {
    id,
    tituloTarefa,
    descricaoTarefa,
    inicioTarefa,
    fimTarefa,
    statusTarefa,
    recursoTarefa,
  };
}

//Definição do array contendo os dados iniciais da listagem de tarefas
const initialRows = [
  createData(
    1,
    "Tarefa 1",
    "Descrição da Tarefa 1",
    "2022-01-01",
    "2022-01-02",
    "Concluída",
    "Recurso 1"
  ),
  createData(
    2,
    "Tarefa 2",
    "Descrição da Tarefa 2",
    "2022-01-03",
    "2022-01-04",
    "Em Andamento",
    "Recurso 2"
  ),
  createData(
    3,
    "Tarefa 3",
    "Descrição da Tarefa 3",
    "2022-01-04",
    "2022-01-05",
    "Em Andamento",
    "Recurso 3"
  ),
  createData(
    4,
    "Tarefa 4",
    "Descrição da Tarefa 4",
    "2022-01-05",
    "2022-01-06",
    "Em Andamento",
    "Recurso 4"
  ),
  createData(
    5,
    "Tarefa 5",
    "Descrição da Tarefa 5",
    "2022-01-06",
    "2022-01-07",
    "Em Andamento",
    "Recurso 5"
  ),
  createData(
    6,
    "Tarefa 6",
    "Descrição da Tarefa 6",
    "2022-01-07",
    "2022-01-08",
    "Aguardando",
    "Recurso 6"
  ),
];

//Componente ListarTarefa
const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  //O array definido acima é setado como conteúdo do state Tarefas na renderização inicial do componente.
  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);

    //Objeto local para armazenamento da tarefa filtrada de acordo com a seleção do usuário
    let tarefaParaEditar = tarefas.filter((obj) => {
      return obj.id === id;
    })[0];

    //Atribuição do Objeto local, setado acima, ao state Tarefa
    setTarefa(tarefaParaEditar);

    //Seta como true o state responsável pela exibição do Model de Editar Tarefa
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    setTarefas((current) =>
      current.filter((tarefa) => {
        return tarefa.id !== id;
      })
    );
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "descricaoTarefa",
      headerName: "Descrição",
      width: 300,
      editable: true,
    },
    {
      field: "inicioTarefa",
      headerName: "Data de Início",
      width: 150,
      editable: true,
    },
    {
      field: "fimTarefa",
      headerName: "Data de Finalização",
      width: 150,
      editable: true,
    },
    {
      field: "statusTarefa",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "recursoTarefa",
      headerName: "Recurso",
      width: 150,
      editable: true,
    },

    {
      field: "editar",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <Button
          variant="contained"
          color="success"
          onClick={() => handleEditar(params.id)}
        >
          <EditIcon fontSize="small" />
        </Button>,
      ],
    },
    {
      field: "deletar",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeletar(params.id)}
        >
          <DeleteIcon fontSize="small" />
        </Button>,
      ],
    },
  ];

  return (
    <>
      <Card sx={{ height: "calc(100vh - 64px)" }}>
        <CardHeader title="Tarefas" subheader="Listagem de Tarefas" />
        <CardContent>
          <DataGrid rows={tarefas} columns={columns} />
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleOpen}>
            Criar Tarefa
          </Button>
          <Button size="small" variant="outlined">
            Cancelar
          </Button>
        </CardActions>
      </Card>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <CriarTarefa
              handleClose={handleClose}
              tarefas={tarefas}
              setTarefas={setTarefas}
            />
          </div>
        </Modal>
      </div>
      <div>
        <Modal
          open={openEditar}
          onClose={handleCloseEditar}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <EditarTarefa
              handleCloseEditar={handleCloseEditar}
              idTarefaSelecionada={idTarefaSelecionada}
              tarefas={tarefas}
              tarefa={tarefa}
              setTarefas={setTarefas}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ListarTarefa;
