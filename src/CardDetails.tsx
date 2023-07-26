import { defer, useLoaderData } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'
import { getOneCard } from './queries/cards'

export const loader = (queryClient: QueryClient) =>
    async ({ params }: any) => {
        const cards = await queryClient.fetchQuery(
            ['oneCard'],
            () => getOneCard(params.id)
        )
        return defer({ card: cards[0] })
    }

const CardDetails = () => {
    const { card } = useLoaderData() as any
    return (
        <>
            {
                card ?
                    <div>
                        <div>{card.name}</div>
                        <div>{card.manaCost}</div>
                        <div>{card.text}</div>
                        <div>
                            <img src={card?.imageUrl ?? ""} alt="" />
                        </div>
                    </div>

                    :
                    <>no results</>
            }
        </>
    )
}

export default CardDetails