import React from 'react'
import { Checkbox, FormControl, FormControlLabel } from '@mui/material'
import { Controller } from 'react-hook-form'

const FormCheckbox: React.FC<IFormCheckbox> = React.forwardRef((props, ref) => {
    return (
        <Controller name={props.name} control={props.control}
            render={({ field }) =>
                <FormControl fullWidth sx={{ display: 'flex', width: 'fit-content', textAlign: 'left' }}>
                    <FormControlLabel value={field.value} checked={field.value} control={<Checkbox {...field} />} label={props.label} />
                </FormControl>
            }
        />
    )
})

export default FormCheckbox