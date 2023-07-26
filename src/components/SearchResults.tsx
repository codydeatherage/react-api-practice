import React, { useMemo } from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const SearchResults: React.FC<{ results: CardResponse[] }> = ({ results }) => {
    const uniqueResults = useMemo(() =>
        results.filter((res, index, self) =>
            index === self.findIndex((t) =>
                (t.name === res.name && t.imageUrl)
            )
        ), [results])

    return (
        <Grid container spacing={0.5} sx={{ display: 'flex', width: '85vw', margin: 'auto', flexWrap: 'wrap', outline: '1px solid green', justifyContent: 'center' }} xs={12} sm={10}  >
            {
                uniqueResults.map((card: CardResponse) =>
                    card.imageUrl &&
                    <Grid item sx={{ maxWidth: '150px', maxHeight: '350px', border: '1px solid blue', padding: 0 }} key={card.id} xs={6} sm={3} lg={2} xl={1.5}>
                        <Link key={card.id} to={`/${card.id}`} style={{ height: 'fit-content', width: 'fit-content' }}>
                            <img style={{ width: '100%', height: '100%', maxWidth: '250px' }} src={card.imageUrl} alt="" />
                        </Link>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default SearchResults