import { useState, useEffect } from 'react'
import useCards from './hooks/useCards'
import QueryForm from './QueryForm'
import SearchResults from './components/SearchResults'
import { Box } from '@mui/material'


function App() {
  const [params, setParams] = useState<string>()
  const { isLoading, error, data, isFetching, refetch } = useCards(params)

  useEffect(() => {
    if (data && params) refetch()
  }, [params])

  const sendQueryParams = (params: string) => {
    setParams(params)
  }

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + (error instanceof Error && error.message)

  return (
    <Box sx={{ outline: '1px solid red', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
      <QueryForm sendQueryParams={sendQueryParams} />
      <div>{isFetching ? 'Updating...' : ''}</div>
      {data && !isFetching && <SearchResults results={data} />}
    </Box>

  )
}

export default App
