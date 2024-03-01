import { useState } from 'react'
import './App.css'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function Home() {
    const [count, setCount] = useState(0)
  
    return (
      <div><PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id:"519c9242-710e-481e-b1d5-70c834b4cc68",
       embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3a9dc67d-9a95-4213-ba05-c1b21993ca4c&groupId=d4cbbf8a-c53d-44b0-b984-19ca93141c9c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsImRpc2FibGVBbmd1bGFySlNCb290c3RyYXBSZXBvcnRFbWJlZCI6dHJ1ZX19",
          accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80MmFmOTljNi01YTk2LTRkNGQtYWY0OC0zMzE3ZGFjODhkYjAvIiwiaWF0IjoxNzA4Njc2NTExLCJuYmYiOjE3MDg2NzY1MTEsImV4cCI6MTcwODY4MDUzNCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhXQUFBQTcxK3VqWFprVHc5OG1xRDN3WnZhOVdvVzF2WDBlSmwwQTVhRmdjSTVHZGQ2UW5ZRkhvVlZjSGtURkNpa09ZZm4iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiYzQ0YjQwODMtM2JiMC00OWMxLWI0N2QtOTc0ZTUzY2JkZjNjIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJBaW5lbWJhYmF6aSIsImdpdmVuX25hbWUiOiJMYXppYWgiLCJncm91cHMiOlsiNjk1YmUzYzctYWUwNS00NDY4LWE5MjYtMjkxNWY2YTkzNTZlIl0sImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwNS4yMS42NC43OCIsIm5hbWUiOiJMYXppYWggQWluZW1iYWJhemkiLCJvaWQiOiJiZGNjNjAyMC02MDRmLTQ2ZWQtODhmMC1mNDA5Mzg1OTM0OWIiLCJwdWlkIjoiMTAwMzIwMDM0M0Y1NUZDQyIsInJoIjoiMC5BWUlBeHBtdlFwWmFUVTJ2U0RNWDJzaU5zRVpJZjNrQXV0ZFB1a1Bhd2ZqMk1CT0NBSWcuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiZlZrbjVOZVp1SFl3bFoxVlcxcTVLMkl5LUZDWk1vbVJEbEI3RHRCR2s5SSIsInRpZCI6IjQyYWY5OWM2LTVhOTYtNGQ0ZC1hZjQ4LTMzMTdkYWM4OGRiMCIsInVuaXF1ZV9uYW1lIjoibGF6aWFoQGxhYm9yZW11cy51ZyIsInVwbiI6ImxhemlhaEBsYWJvcmVtdXMudWciLCJ1dGkiOiJsU0Z1MVpBbEZFcXJGeGVsa0FZS0FBIiwidmVyIjoiMS4wIiwieG1zX2NhZSI6IjEiLCJ4bXNfdGNkdCI6MTM4MTMyMzU0MX0.JLC485CeLko92WL4SLNC2U4BOQRPyQ_s53lYZ0W4z3C6Gw-ghAJ1SkRgnAaDOQZp50Wk8Tye61qY68YciRdGW_5-qOusvSSkslfVGU9IdcZ9mbPCQykG1zSLsryO2i3I7TnwoYM6yA1RWGPdqS9E52HmsNZWyhQPaOVKizNkoSJsGO2W7zzJ-9KjmbPSRqwosR0UcgPUGfFzLt0XCmrjXUXumPvOlnR5tQc4uA-ys_nhXkNoixbXeooAz26fpSQ45QYN6e7BzAmx-gLdZitfaRTGlDsMHcytOONuecRJYmBoVLtXYXJ0xB9P84kJ8RoCG8hvLSAH7BrqmCbPIn9E9A',
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
  
  export default Home