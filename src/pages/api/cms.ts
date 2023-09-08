export default async function CmsAPI(params:any,res:any) {
  const APIKEY = `5DPRj098NpMErXsxrmq31TlayzNuo5JwALTc`

  const response = await


  fetch(`https://9ub9vm51ab.microcms.io/api/v1/school-contents`,
  {
    headers: { 'X-MICROCMS-API-KEY': APIKEY }
  })
  const cms = await response.json()
  res.status(200).json({cms})
}
