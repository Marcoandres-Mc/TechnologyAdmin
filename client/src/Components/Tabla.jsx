import { Card, Typography } from "@material-tailwind/react";
<<<<<<< HEAD
import BtnUser from "./Btn/BtnUser";
import BtnDelete from "./Btn/BtnDelete";
import {Button} from "@material-tailwind/react";


 
export function Tabla({propiedadesBd, bd}) {

  const title = "Usuarios";

  return (
    <>
      <h2 className="p-4">Usuarios</h2>
      <Card className="h-full w-50 m-3">      
=======

import BtnDeleteA from "./Btn/Admin/BtnDeleteA";
import BtnDeleteU from "./Btn/User/BtnDeleteU";
import BtnDeleteP from "./Btn/Product/BtnDeleteP";

import {Button} from "@material-tailwind/react";
import BtnUser from "./Btn/User/BtnUser";
import BtnAdmin from "./Btn/Admin/BtnAdmin";
import BtnProduct from "./Btn/Product/BtnProduct";


 
export function Tabla({propiedadesBd, bd, title}) {

  return (
    <>
      <Card className="h-full w-50 m-3">
>>>>>>> committ
        <table className="w-full min-w-max table-auto text-left">
          
          <thead>
            <tr>
              {
                Array.isArray(propiedadesBd) && propiedadesBd.map((propiedad, index) => (
                  <th key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal leading-none text-center"
                    >
                      {propiedad}
                    </Typography>
                  </th>
                ))
              }
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-3  text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none text-center"
                  >
                    Editar
                  </Typography>
                </th>

                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none text-center"
                  >
                    Eliminar
                  </Typography>
                </th>

            </tr>
          </thead>
          <tbody>
            {
              Array.isArray(bd) && bd.map((usuario, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  {
                    propiedadesBd.map((propiedad, propIndex) => (
                      <td key={propIndex} className="p-4 text-center">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {usuario[propiedad]}
                        </Typography>
                      </td>
                    ))
                  }
                  <td className="p-4 text-center"> 
<<<<<<< HEAD
                    <BtnUser type="edit" titulo={title} />
=======
                    {title === "Admins" ? <BtnAdmin type="edit" titulo={title} /> : null}
                    {title === "Usuarios" ? <BtnUser type="edit" titulo={title} /> : null}
                    {title === "Productos" ? <BtnProduct type="edit" titulo={title} /> : null}
>>>>>>> committ
                  </td>

                  <td className="p-4 text-center">
                    <Button className="font-bold">
<<<<<<< HEAD
                      <BtnDelete type="delete" titulo={title} />
=======
                      {title === "Admins" ? <BtnDeleteA type="delete" titulo={title} id={usuario._id} /> : null}
                      {title === "Usuarios" ? <BtnDeleteU type="delete" titulo={title} id={usuario._id} /> : null}
                      {title === "Productos" ? <BtnDeleteP type="delete" titulo={title} id={usuario._id} /> : null}
                      
>>>>>>> committ
                    </Button>
                  </td>
                </tr>
              ))
              
            }
          </tbody>
        </table>
      </Card>
    </>
  );
}




export default Tabla;