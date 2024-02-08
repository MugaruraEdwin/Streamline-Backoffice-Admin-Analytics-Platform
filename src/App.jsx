import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3a9dc67d-9a95-4213-ba05-c1b21993ca4c&groupId=d4cbbf8a-c53d-44b0-b984-19ca93141c9c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsImRpc2FibGVBbmd1bGFySlNCb290c3RyYXBSZXBvcnRFbWJlZCI6dHJ1ZX19",
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiIwMDAwMDAwMi0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80MmFmOTljNi01YTk2LTRkNGQtYWY0OC0zMzE3ZGFjODhkYjAvIiwiaWF0IjoxNzA3Mzk4NDcxLCJuYmYiOjE3MDczOTg0NzEsImV4cCI6MTcwNzQwMjM3MSwiYWlvIjoiRTJWZ1lOandWbUhwMG1XUHU0Sk8vTHg0eHRoOFB3QT0iLCJhcHBpZCI6IjI4ODc0NmExLWRlZWQtNGNhMS04MDc4LWQyNDgzNGE1YmNkYyIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzQyYWY5OWM2LTVhOTYtNGQ0ZC1hZjQ4LTMzMTdkYWM4OGRiMC8iLCJvaWQiOiJhOGU2YWM5Yi0wMzJjLTRiMDYtOTFiZC1mYWFjYTJjODAyYmEiLCJyaCI6IjAuQVlJQXhwbXZRcFphVFUydlNETVgyc2lOc0FJQUFBQUFBQUFBd0FBQUFBQUFBQUNDQUFBLiIsInN1YiI6ImE4ZTZhYzliLTAzMmMtNGIwNi05MWJkLWZhYWNhMmM4MDJiYSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJFVSIsInRpZCI6IjQyYWY5OWM2LTVhOTYtNGQ0ZC1hZjQ4LTMzMTdkYWM4OGRiMCIsInV0aSI6IldxREJ1cjR5WEU2aHp3cjdjWW1DQUEiLCJ2ZXIiOiIxLjAiLCJ4bXNfdGRiciI6IkVVIn0.DPzRgNJ5qpnbP0Ko68kpvCq51RyqNyWjm7Ihvpw9astkKfp5RRuNme0nd1me330uZi1E7-hvVBvh69jbD1au21CV3P0y4P_OzaCrQLnYbnwwN1Bj3dEZsv7d6mscWKt0xCcboxvY0AvVSHXcgrwA4FWMoxqxKwVte6_iBmYuSwAuRtRS-LzEe4VqUTUIdK8P8X5fQ2uZjiQ9Ks7T8NnRIF3P35LYVmmdJ9K6TybL1JxTcejN0Qxz9YycKyFSiJ9oHWuOMl647HQk5N1K4agPSqF2kNJLQASV1YTowMgX5md3Gz9YlVRTmlv5jASuv1k0rNhysH638vPwDqV-5Ltgzw',
        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false
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

      cssClassName={"reportClass"}

      getEmbeddedComponent={(embeddedReport) => {
        window.report = embeddedReport;
      }}
    /></div>
  )
}

export default App
