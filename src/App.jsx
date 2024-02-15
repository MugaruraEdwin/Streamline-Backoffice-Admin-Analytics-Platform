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
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDJhZjk5YzYtNWE5Ni00ZDRkLWFmNDgtMzMxN2RhYzg4ZGIwLyIsImlhdCI6MTcwNzk5MjM4NSwibmJmIjoxNzA3OTkyMzg1LCJleHAiOjE3MDc5OTc3NTUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUE4NkZOSVg2R29zRHlDbkYrTk1pcjNwbUY3Q215NlJMSzloUTB1cWNDb3hhRnJxWGYwWDBhdnNmZ2plTVVNSGlwIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiRW11bHUiLCJnaXZlbl9uYW1lIjoiS2VpdGgiLCJpcGFkZHIiOiIxMDUuMjEuNjQuNzgiLCJuYW1lIjoiS2VpdGggRW11bHUiLCJvaWQiOiIyYjYwN2JlZS1iYWYxLTQ1YmQtODdjMC1lZDUxNjVkMWFjNzYiLCJwdWlkIjoiMTAwMzIwMDM0M0Y1NUZEMCIsInJoIjoiMC5BWUlBeHBtdlFwWmFUVTJ2U0RNWDJzaU5zQWtBQUFBQUFBQUF3QUFBQUFBQUFBQ0NBREEuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiYmdEYW1JNi1aMGFIWVpuODZac2pCWFd2b0VHMENORnZVa3RQZnRFN2Y2QSIsInRpZCI6IjQyYWY5OWM2LTVhOTYtNGQ0ZC1hZjQ4LTMzMTdkYWM4OGRiMCIsInVuaXF1ZV9uYW1lIjoia2VpdGhlQGxhYm9yZW11cy51ZyIsInVwbiI6ImtlaXRoZUBsYWJvcmVtdXMudWciLCJ1dGkiOiJHRXpNcFQ0SVlraVdMMGc3YWJ4dEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.BuZMVytnyAa0gyn_vVhsHeZLQJso816vswvt-TTyk3zhtWF5ridONOMK9gqji3UPj1r5SDPPIHBTLdp51OyTz0EKQnQnjGPPKBoJTFihq6fKEKALrAjPLBK8LUvuWxTENA_KohOEy4jSeqXfH4HW4x-9v7Aj1xyf4tchDbOs6iivucuauMU2wHBHKlTiiWXcK0doCzoSnfR-UGRQChUebD4Jzykzv4Bce0Y8ZLcyDvn9QJEzyLvsF0tZxQnFRDe81KhPeE57YTedsOIasdMSAaA7BG-dFAwW-OzSOIS3OmpM9-NuMBIX_Mr9AjZc2sxThd3GtP0lnOg_taEJkapitg',
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
