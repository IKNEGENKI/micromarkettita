import React, { useState, useEffect } from "react"; 
import { Divider, Grid, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "../css/usuario.css";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Field, Formik, Form, ErrorMessage } from "formik";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import configData from "../config/config.json";
import { Container, Stack } from '@mui/system';

//Setup for Moment
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { now } from "moment";
import "moment/locale/es";


//Aqui se hace la conexion de la api con la base de datos 
const CATEGORIAS_URL =
 configData.CATEGORIAS_API_URL || "http://127.0.0.1:8000/api/categorias";
const TORNEOS_URL =
  configData.TORNEOS_API_URL || "http://127.0.0.1:8000/api/torneos";

  const Item = styled(Paper)(({ theme }) => ({
    //cambiar colores
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "start",
    color: theme.palette.text.secondary,
  }));

  const registrarCategorias = async (categorias) => {
    categorias.forEach(function (item, index) {
      const { data } = axios.post(CATEGORIAS_URL, {
        Categoria: item,
      });
    });
  };
  
  const postRegistrarProducto = async (datos) => {
    console.log("Send Producto: " + JSON.stringify(datos));
    const response = await fetch(TORNEOS_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  }
  
  const postRegistrarCategorias = async (datos) => {
    const response = await fetch(CATEGORIAS_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    return response;
  }
  
  const RegistrarProducto = () => {
    var userID = localStorage.getItem('userID');
    const [open, setOpen] = React.useState(false);
    const [alertColor, setAlertColor] = useState('');
    const [alertContent, setAlertContent] = useState('');
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    const [formularioNoEnviado, setFormularioNoEnviado] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
  
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
  
    const getCategorias = async () => {
      await axios.get(CATEGORIAS_URL)
        .then(response => {
          setCategorias(response.data);
        }).catch(error => {
          console.log(error);
        })
    }
  
    /*const getProductos = async () => {
      await axios.get(TORNEOS_URL)//cambiar
        .then(response => {
          setTorneos(response.data);
          console.log("Productos: " + JSON.stringify(response.data));
        }).catch(error => {
          console.log(error);
        })
    }
    */
  
    const enviarProductosData = async (productoData, resetForm) => {
  
      const data = {

        //revisar

        NombreP: productoData.NombreP,
        CodigoP: productoData.CodigoP,
        CategoriaP: productoData.CategoriaP,
        DescripcionP: productoData.DescripcionP,
        PrecioVentaP: productoData.PrecioVentaP,
        MarcaP: productoData.MarcaP
    }
  
      var categoriasData = [];
  
      var existeProducto = productos.some(producto => ((producto.NombreP == data.NombreP)));
      console.log("Existe Producto:" + existeProducto);
      if (!existeProducto) {
        const responseProducto = await postRegistrarProducto(data);
        var producto = await responseProducto.json();
  
        if (responseProducto.status === 201) {
  
          setAlertColor("success");
          setAlertContent("Producto registrado exitosamente");
          setOpen(true);
          var categoriasSelected = productoData.Categoria;
          var categoriasData = [];
          console.log("Categorias seleccionadas:" + categoriasSelected);
          categoriasSelected.forEach((categoria) => {
  
            categoriasData.push({
              Categoria: categoria,
              Cod_Producto: producto.id
            });
  
          });
          console.log("Categorias Data:" + JSON.stringify(categoriasData));
  
          categoriasData.forEach((categoria) => {
            postRegistrarCategorias(categoria);
          });
          resetForm();
          //setFormularioEnviado(true);
  
        }
  
        if (responseProducto.status === 400) {
          if (producto.Message === "El producto no se guardo adecuadamente") {
            setAlertColor("error");
            setAlertContent("El producto no se guardo adecuadamente");
            setOpen(true);
          }
        }
      } else {
        setAlertColor("error");
        setAlertContent("El producto ya se encuentra registrado");
        setOpen(true);
      }
    }
  
    useEffect(() => {
  
      getCategorias();
      getProductos();
  
    }, [])
  
    return (
      <>
  
        <Typography
          variant="h5"
          align="center"
          color="#ffff"
          sx={{
            input: { color: "white" },
          }}
        >
          ¡Registrar Producto!
        </Typography>
        <hr className="hr" />
        <Formik
          initialValues={{
            NombreP: "",
            CodigoP: "",
            CategoriaP: [],
            DescripcionP: "",
            PrecioVentaP: "",
            MarcaP: "",
          }}
          validate={(valores) => {
            let errores = {};
  
  
          // validacion Nombre de producto
          if (!valores.NombreP) {
            errores.Nombre = "Por favor ingresa un nombre de producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s0-9]{1,40}$/.test(valores.NombreP)) {// revisar
            errores.Nombre_Torneo =
              "El nombre del Torneo solo puede contener letras y espacios";
          }
        
           // validación para CodigoDeProducto
           if (!valores.CodigoP) {
            errores.CodigoP =
              "Por favor ingresa el codigo del producto";
          } else if (!/^\d{7,20}$/.test(valores.CodigoP)) {
            errores.CodigoP =
              "El codigo de producto solo puede contener números";
          }


          // validaciones para categoria
          if (valores.Categoria.length === 0) {
            errores.Categoria =
              "Por favor seleccione la categoria";
          }
          

          // validacion Descripción.
          if (!valores.DescripcionP) {
            errores.DescripcionP = "Por favor ingresa una descripcion";
          } else if (!/^[a-zA-ZÀ-ÿ\s0-9]{1,40}$/.test(valores.DescripcionP)) { //revisar
            errores.DescripcionP =
              "La descripcion solo puede contener letras y espacios";
          }
          

          // validación para precioDeVenta
          if (!valores.PrecioVentaP) {
            errores.PrecioVentaP =
              "Por favor ingresa el precio de venta del producto";
          } else if (!/^\d{7,20}$/.test(valores.PrecioVentaP)) {
            errores.PrecioVentaP =
              "El precio de venta solo puede contener números";
          }
          
          // validacion de Marca
          if (!valores.MarcaP) {
            errores.LMarcaP = "Por favor ingresa la Marca del producto";
          } else if (!/^[a-zA-ZÀ-ÿ\s-./]{1,40}$/.test(valores.MarcaP)) { //revisar
            errores.LMarcaP =
              "La marca de producto solo puede contener letras, espacios, - y /";
          }
  
            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            try {
              enviarProductoData(valores, resetForm);
              console.log("Es Formulario Enviado: " + formularioEnviado);
  
              if (formularioEnviado) {
                console.log("Formulario enviado IF: " + formularioEnviado);
  
                //setFormularioEnviado(false);
              }
              //setTimeout(() => setFormularioEnviado(false), 3000);
            } catch (error) {
              console.log(error);
            }
  
           
          }}
        >
          {({ handleSubmit, values, errors, touched, handleChange, handleBlur, resetForm }) => (
            <Form>
              <Snackbar open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              >
                <Alert severity={alertColor} onClose={handleClose}>
                  {alertContent}
                </Alert>
              </Snackbar>
              <div className="cuandroContentRegisterProducto">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Item className="fondoColor">
                    <TextField
                      sx={{
                        input: { color: "white" },
                        label: { color: "white" },
                      }}
                      id="standard-required1"
                      label="Nombre del Producto: *"
                      name="NombreP"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.NombreP}
                      fullWidth
                      defaultValue=""
                      variant="standard"
                    />
                  </Item>
                  <ErrorMessage
                    name="NombreP"
                    component={() => (
                      <Grid
                        style={{ color: "#FF0000", fontSize: "16px" }}
                        item
                        xs={12}
                        md={12}
                        fullWidth
                      >
                        {errors.NombreP}
                      </Grid>
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Item className="fondoColor">
                    <FormControl
                      variant="standard"
                      fullWidth
                      sx={{
                        input: { color: "#fff" },
                        label: { color: "#fff" },
                        select: { color: "#fff" },
                        option: { color: "#000" },
                        div: { color: "#fff" },
                      }}
                    >
                      <InputLabel id="demo-multiple-checkbox-label">
                        Categoria(as): *
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        name="Categoria"

                        onBlur={handleBlur}
                        value={values.Categoria}
                        onChange={handleChange}

                        renderValue={(selected) => selected.join(", ")}

                      >
                        <MenuItem value={"Abarrotes"}>Abarrotes</MenuItem>
                        <MenuItem value={"Bebidas alcoholicas"}>Bebidas alcoholicas</MenuItem>
                        <MenuItem value={"Cuidado personal"}>Cuidado personal</MenuItem>
                        <MenuItem value={"Enlatados"}>Enlatados</MenuItem>
                        <MenuItem value={"Farmacia"}>Farmacia</MenuItem>
                        <MenuItem value={"Fiambres y embutidos"}>Fiambres y embutidos</MenuItem>
                        <MenuItem value={"Golosinas"}>Golosinas</MenuItem>
                        <MenuItem value={"Lacteos"}>Lacteos</MenuItem>
                        <MenuItem value={"Limpieza del hogar"}>Limpieza del hogar</MenuItem>
                        <MenuItem value={"Panaderia"}>Panaderia</MenuItem>
                        <MenuItem value={"Snacks"}>Snacks</MenuItem>
                      </Select>
                    </FormControl>
                  </Item>
                  <ErrorMessage
                    name="Categoria"
                    component={() => (
                      <Grid
                        style={{ color: "#FF0000", fontSize: "16px" }}
                        item
                        xs={12}
                        md={12}
                        fullWidth
                      >
                        {errors.Categoria}
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Item className="fondoColor">
                    <TextField
                      sx={{
                        input: { color: "white" },
                        label: { color: "white" },
                      }}
                      id="standard-required5"
                      label="Descripcion: *"
                      fullWidth
                      defaultValue=""
                      name="Descripcion"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.DescripcionP}
                      variant="standard"
                    />
                  </Item>
                  <ErrorMessage
                    name="DescripcionP"
                    component={() => (
                      <Grid
                        style={{ color: "#FF0000", fontSize: "16px" }}
                        item
                        xs={12}
                        md={12}
                        fullWidth
                      >
                        {errors.DescripcionP}
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Item
                    className="fondoColor"
                    sx={{
                      input: { color: "white" },
                      label: { color: "white" },
                    }}
                  >
                    <TextField
                      sx={{
                        input: { color: "white" },
                        label: { color: "white" },
                        value: { color: "white" },
                      }}
                      id="standard-required"
                      label="MarcaP: *"
                      name="MarcaP"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Invitacion}
                      fullWidth
                      defaultValue="Marca del producto"
                      variant="standard"
                    />
                  </Item>
                  <ErrorMessage
                    name="MarcaP"
                    component={() => (
                      <Grid
                        style={{ color: "#FF0000", fontSize: "16px" }}
                        item
                        xs={12}
                        md={12}
                        fullWidth
                      >
                        {errors.MarcaP}
                      </Grid>
                    )}
                  />
                </Grid>
              </Grid>
            </div>
              <hr className="hr" />
              <div className="cuandroContentRegisterProducto">
                <Grid container spacing={2}>
  
                  <Grid item xs={12} md={6}>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Item className="fondoColor">
                      <TextField
                        sx={{
                          input: { color: "white" },
                          label: { color: "white" },
                        }}
                        type="number"
                        id="standard-required4"
                        label="Precio de venta ($): *"
                        name="PrecioVentaP"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.PrecioVentaP}
                        fullWidth
                        defaultValue=""
                        variant="standard"
                      />
                    </Item>
                    <ErrorMessage
                      name="PrecioVentaP"
                      component={() => (
                        <Grid
                          style={{ color: "#FF0000", fontSize: "16px" }}
                          item
                          xs={12}
                          md={12}
                          fullWidth
                        >
                          {errors.PrecioVentaP}
                        </Grid>
                      )}
                    />
                    <Item className="fondoColor">
                      <TextField
                        sx={{
                          input: { color: "white" },
                          label: { color: "white" },
                        }}
                        type="number"
                        id="standard-required4"
                        label="Codigo de producto($): *"
                        name="CodigoP"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.CodigoP}
                        fullWidth
                        defaultValue=""
                        variant="standard"
                      />
                    </Item>
                    <ErrorMessage
                      name="PCodigoP"
                      component={() => (
                        <Grid
                          style={{ color: "#FF0000", fontSize: "16px" }}
                          item
                          xs={12}
                          md={12}
                          fullWidth
                        >
                          {errors.CodigoP}
                        </Grid>
                      )}
                    />
                  </Grid>
                </Grid>
              </div>
              
              <hr className="hr" />
              <div className="cuandroContentRegisterTorneo">
                
              </div>
              <div>
                <Stack m={5}
                  direction="row"
                  spacing={3}
                  justifyContent="center"
                  alignItems="center">
  
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}
                    sx={{ width: '25%' }}
                  >Guardar
  
                  </Button>
  
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ width: '25%' }}
                    type="reset"
                  >Cancelar
                  </Button>
  
                </Stack>
              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  };
  
  export default RegistrarProducto;
  