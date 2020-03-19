import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const doc = await req.db.collection('source').findOne({
    name: 'yandex'
  })

  console.log(doc)

  res.json(doc)
})

export default handler
