import { Button, TextField } from "@mui/material";

const FormularioRestaurante = () => {

    const onSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        console.log('Preciso enviar dados para a API')
    }

    return (
        <form onSubmit={onSubmitForm}>
            <TextField id="standard-basic" label="Standard" variant="standard"></TextField>
            <Button variant="outlined">Novo</Button>
        </form>)

}

export default FormularioRestaurante;