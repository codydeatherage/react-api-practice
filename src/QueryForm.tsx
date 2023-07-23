import { useState } from 'react'
import { Box, Button, TextField, FormControl, SelectChangeEvent, FormGroup, FormLabel } from "@mui/material"
import { useForm } from 'react-hook-form'
import FormCheckbox from './components/FormCheckbox'

interface CardsRequest {
    queryStr: string
    searchByName: boolean
    searchByType: boolean
    searchByText: boolean
}

const QueryForm: React.FC<{ sendQueryParams: (params: string) => void }> = ({ sendQueryParams }) => {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm<CardsRequest>({
        defaultValues: {
            searchByName: true,
            searchByType: false,
            searchByText: false
        }
    })
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const onSubmit = (form: any) => {
        const searchFields = ['Name', 'Text', 'Type']
        console.log(form)
        let params = '?'
        searchFields.forEach((f)=> form[`searchBy${f}`] && (params += `${f.toLowerCase()}=${form.queryStr}&`))
        // for (let f of searchFields) {
        //     if (form[`searchBy${f}`]) {
        //         params += `${f.toLowerCase()}=${form.queryStr}&`
        //     }
        // }
        console.log(params.at(-1) === '&' ? params.slice(0, -1) : params)
        sendQueryParams(params.at(-1) === '&' ? params.slice(0, -1) : params)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ width: '70%', margin: 'auto', justifyContent: 'left', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', width: '100%' }}>
                    <TextField
                        fullWidth
                        {...register('queryStr')}
                        size='small'
                        sx={{ fieldset: { borderRadius: 0, } }}
                        placeholder='Search Terms...'
                    />
                    <Button type='submit' variant='contained' sx={{ borderRadius: 0, backgroundColor: '#434343', fontWeight: 'bold' }}>SEARCH</Button>
                </Box>
                <FormControl fullWidth sx={{ display: 'flex', width: 'fit-content', textAlign: 'left', }}>
                    <FormLabel id="radio-group-label">Search Card: </FormLabel>
                    <FormGroup row>
                        <FormCheckbox control={control} {...register('searchByName')} label='Name' />
                        <FormCheckbox control={control} {...register('searchByType')} label='Type' />
                        <FormCheckbox control={control} {...register('searchByText')} label='Text' />
                    </FormGroup>
                </FormControl>

                {/* <Controller name={'searchByName'} control={control}
                    render={({ field }) =>
                        <FormControl fullWidth sx={{ display: 'flex', width: 'fit-content', textAlign: 'left', border: '1px solid red' }}>
                            <FormLabel id="radio-group-label">Search Card: </FormLabel>
                            <FormControlLabel checked={field.value} control={<Checkbox {...field}  />} label={'name'} />
                        </FormControl>
                    }
                /> */}

                {/* <RadioGroup {...register('searchFields')} control={control} options={radioOptions} defaultValue='name' /> */}
                {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    sx={{ borderRadius: 'none' }}

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl> */}
            </Box>
        </form>
    )
}

export default QueryForm