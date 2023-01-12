import fetch from 'node-fetch'

export const handler = async (event, context) => {
  const eventBody = JSON.parse(event.body)
  const POKE_API = 'https://developer.nps.gov/api/v1/activities?api_key=aChgBlCacUHuXxwo6FnjXeXCvW9L4jYWdTGQLCXM'

  const response = await fetch(POKE_API)
  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries
    })
  }
}
