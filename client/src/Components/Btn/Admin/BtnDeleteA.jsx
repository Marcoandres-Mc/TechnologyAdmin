import React, { useState } from 'react';


import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { deleteAdmin } from '../../../api/auth';
import { useNavigate } from 'react-router-dom';


const BtnDeleteA = ({type, titulo,id}) => {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(!open);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteAdmin(id);
        
        navigate('/home');
        setTimeout(() => {
        navigate('/home/cuentas/admins'); 
        }, 20);

        setOpen(!open)
    };

  return (
    <>
        <div className='flex justify-end'>
            <Button onClick={handleOpen} className='m-0 p-0' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </Button>
        </div>
        <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
            <DialogHeader className="relative m-0 block">

            <Typography variant="h4" color="blue-gray">
                ¿Estás seguro de que deseas eliminar este {titulo}?
            </Typography>

            </DialogHeader>

            <DialogFooter className='flex justify-between'>
                <Button color="blue-gray" onClick={handleOpen}>
                    Cancelar
                </Button>
                <Button color="red" onClick={handleDelete}>
                    Eliminar {titulo}
                </Button>
            </DialogFooter>  
        </Dialog>
    </>
  )
}

export default BtnDeleteA