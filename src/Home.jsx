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
          accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDJhZjk5YzYtNWE5Ni00ZDRkLWFmNDgtMzMxN2RhYzg4ZGIwLyIsImlhdCI6MTcwODUxNDg2MywibmJmIjoxNzA4NTE0ODYzLCJleHAiOjE3MDg1MTkxOTcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFEMkpkdDVYemk4WnJlQnl1SEwybGpXeXk5SFFSRlI0Q0ZlTnc4U29tSzZOdEUyajQ2NG4ycHBzeENnSjJmaUtzIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTXVnYXJ1cmEiLCJnaXZlbl9uYW1lIjoiRWR3aW4gTXVzdW1iYSIsImlwYWRkciI6IjEwNS4yMS42NC43OCIsIm5hbWUiOiJFZHdpbiBNdXN1bWJhIE11Z2FydXJhIiwib2lkIjoiYzZkNDI5OTgtMjgwZS00NDI5LWI4ZmYtODIyMzg5MmZhMDRkIiwicHVpZCI6IjEwMDMyMDAzNDNGNTVGRDMiLCJyaCI6IjAuQVlJQXhwbXZRcFphVFUydlNETVgyc2lOc0FrQUFBQUFBQUFBd0FBQUFBQUFBQUNDQUdRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IkRqbjRGV1o4VjRYeU5mZzgxSUFkZFdOemNHX1UwalJZOHpRMzVFNGtMd00iLCJ0aWQiOiI0MmFmOTljNi01YTk2LTRkNGQtYWY0OC0zMzE3ZGFjODhkYjAiLCJ1bmlxdWVfbmFtZSI6ImVkd2luQGxhYm9yZW11cy51ZyIsInVwbiI6ImVkd2luQGxhYm9yZW11cy51ZyIsInV0aSI6InU2SHVTOHdXeVVlRUk1cmZZcFk3QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.k3HVc1WWPAg_DOm9Dg-mGVVC7l95LmedYbIIxgNaIz5Q1JxsGGzEmlceCJgBxXh3flXvadvuILnqQOZvaPdRmzOc1_u-LKsO6XpBUijwXxN7vd5vWUbs-3Tj2DWJm183NuE8Q9XuZLEyV5X6Jbu3fd0HjfrXgyRL3TfsYtBqx5uiNmfVdJ1bSlp6GODxL5TWuIlERbDqcLWlNBBILFvZjEY4qyyHuf8mj4hQS8IAdv8ZNzQEEEIF0qyrxpUgfy3Lr0cSvZk9ct4Wb1WfzvpJ5FQr3QbrrIykJ7WhwDgnCA6P5pZC5Nvt9dcwsPrYwxfBtRsKWnRlMcBNNndgkKpT4w',
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