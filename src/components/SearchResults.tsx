import React, { useMemo } from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const SearchResults: React.FC<{ results: CardResponse[] }> = ({ results }) => {
    const uniqueResults = useMemo(() =>
        results.filter((res, index, self) => index === self.findIndex((t) => (t.name === res.name)))
        , [results]
    )

    return (
        <>
            {
                uniqueResults.map((card: CardResponse) =>
                    card.imageUrl &&
                    <Link to={`/${card.id}`}>
                        <Grid item sx={{ width: 'fit-content', minWidth: '225px' }} key={card.id} xs={6} sm={4} md={2} xl={1}>
                            <img style={{ width: '100%', height: '100%' }} src={card.imageUrl} alt="" />
                        </Grid>
                    </Link>
                )
            }
        </>
    )
}

export default SearchResults