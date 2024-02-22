import { useState } from 'react'
import reactLogo from './assets/react.svg'


import './App.css'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div><PowerBIEmbed
      embedConfig={{
        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
        id:"519c9242-710e-481e-b1d5-70c834b4cc68",
     embedUrl: "https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&groupId=d4cbbf8a-c53d-44b0-b984-19ca93141c9c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsImRpc2FibGVBbmd1bGFySlNCb290c3RyYXBSZXBvcnRFbWJlZCI6dHJ1ZX19",
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDJhZjk5YzYtNWE5Ni00ZDRkLWFmNDgtMzMxN2RhYzg4ZGIwLyIsImlhdCI6MTcwODU4MzQ5MywibmJmIjoxNzA4NTgzNDkzLCJleHAiOjE3MDg1ODg1NjEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFmTXljZGJ1WFUrQkVzb2g5SDBPclU5eC8rQ1B5TnlPRkQ1K3BCSVg1RzQrZUg3TG5Ja2JSbUFqUHZHQTJDb2wxIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiQWluZW1iYWJhemkiLCJnaXZlbl9uYW1lIjoiTGF6aWFoIiwiaXBhZGRyIjoiMTAyLjIxOS4xMDIuMTY3IiwibmFtZSI6IkxhemlhaCBBaW5lbWJhYmF6aSIsIm9pZCI6ImJkY2M2MDIwLTYwNGYtNDZlZC04OGYwLWY0MDkzODU5MzQ5YiIsInB1aWQiOiIxMDAzMjAwMzQzRjU1RkNDIiwicmgiOiIwLkFZSUF4cG12UXBaYVRVMnZTRE1YMnNpTnNBa0FBQUFBQUFBQXdBQUFBQUFBQUFDQ0FJZy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJ3RldoeGIzdGpVLXJNSHNHN2FNTm1UN2tPRVhhbUQ3dXZRODRKbEVBU0l3IiwidGlkIjoiNDJhZjk5YzYtNWE5Ni00ZDRkLWFmNDgtMzMxN2RhYzg4ZGIwIiwidW5pcXVlX25hbWUiOiJsYXppYWhAbGFib3JlbXVzLnVnIiwidXBuIjoibGF6aWFoQGxhYm9yZW11cy51ZyIsInV0aSI6ImlwTk9RYVZzeDBpWUl1ZjFDQUYyQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.qX9DHnfDyaQz00u5WF96lNU_btPfE1aq4FPpnoJ2TfZrJgCQjqvrE4GY8RJZdsuR_nORhJi6nIqITO2ApPGrmwJlZgzrWBgF3r6XIgI6eT8XPGEEwx3GwsdfNz_ElyEZg8wMF1fkzlj3w_vHTkE3UTqOiYD-oLK5JlicnSNWnJY82yUr2qyjq4AW2mDj5uRJ8SgOAKJ3BQBUadOC165gP7TDSRvjB1Xip1h49XMwtnxK-sD6EvNWyE2KYf1WqsdRElPJ3RVhisUv-F2Dl71QyB0Ycn_LcvcSHt8xAbj8d3O9lPilmaFPQpqDG3D1A34ocga2N_8AUZVUD2U4RevXcA',
        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: true
            }
          },
          background: models.BackgroundType.Transparent,
        }
      }}

      eventHandlers={
        new Map([
          ['loaded', function () { console.log('Report loaded'); }],
          ['rendered', function () { console.log('Report rendered'); }],
          ['error', function (event) { console.log(event.detail); }],
          ['visualClicked', () => console.log('visual clicked')],
          ['pageChanged', (event) => console.log(event)],
        ])
      }

      cssClassName={"bi-embedded"}

      getEmbeddedComponent={(embeddedReport) => {
        window.report = embeddedReport;
      }}
    />
    </div>
    // <div>
    //   <iframe title="STREAMLINE demo files (1)" width="1140" height="700" src="https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&autoAuth=true&ctid=42af99c6-5a96-4d4d-af48-3317dac88db0" frameborder="0" allowFullScreen="true"></iframe>
    // </div>
    

  )
}

export default App
