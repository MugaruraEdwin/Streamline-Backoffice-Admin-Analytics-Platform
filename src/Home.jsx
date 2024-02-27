import { useState } from 'react'
import './App.css'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function Home() {
    const [count, setCount] = useState(0)
  
    return (
      // <div><PowerBIEmbed
      //   embedConfig={{
      //     type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
      //     id:"519c9242-710e-481e-b1d5-70c834b4cc68",
      //  embedUrl: "https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&groupId=d4cbbf8a-c53d-44b0-b984-19ca93141c9c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsImRpc2FibGVBbmd1bGFySlNCb290c3RyYXBSZXBvcnRFbWJlZCI6dHJ1ZX19",
      //     accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDJhZjk5YzYtNWE5Ni00ZDRkLWFmNDgtMzMxN2RhYzg4ZGIwLyIsImlhdCI6MTcwODY4ODYwOSwibmJmIjoxNzA4Njg4NjA5LCJleHAiOjE3MDg2OTMyNzAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFXYnVmUG83cXFLWUlMaDl1alAxTERSUGlMcDBXRVBULzBIa3NLNm1CWjBLVmZPOGcvRGU4eFdDSFpDKzR5bG44IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQWluZW1iYWJhemkiLCJnaXZlbl9uYW1lIjoiTGF6aWFoIiwiaXBhZGRyIjoiMTA1LjIxLjY0Ljc4IiwibmFtZSI6IkxhemlhaCBBaW5lbWJhYmF6aSIsIm9pZCI6ImJkY2M2MDIwLTYwNGYtNDZlZC04OGYwLWY0MDkzODU5MzQ5YiIsInB1aWQiOiIxMDAzMjAwMzQzRjU1RkNDIiwicmgiOiIwLkFZSUF4cG12UXBaYVRVMnZTRE1YMnNpTnNBa0FBQUFBQUFBQXdBQUFBQUFBQUFDQ0FJZy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJ3RldoeGIzdGpVLXJNSHNHN2FNTm1UN2tPRVhhbUQ3dXZRODRKbEVBU0l3IiwidGlkIjoiNDJhZjk5YzYtNWE5Ni00ZDRkLWFmNDgtMzMxN2RhYzg4ZGIwIiwidW5pcXVlX25hbWUiOiJsYXppYWhAbGFib3JlbXVzLnVnIiwidXBuIjoibGF6aWFoQGxhYm9yZW11cy51ZyIsInV0aSI6InR3UFpxOGV0VGtTRXh3YnhKT3dWQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.FjeLQ_5qEMv-TsoBGHVeF9GFh1iXxSRlL8oqF57mSKJiOhsNP3q_RYD0d2lB0SADgha7kiSO0bK-julm4Fq_LMe5kKVBz3LcAVQPB1TuJKX0_NaOLs8C3ZwuNZU2Csf9T2Jh8ZygPJvb-AnfA68WtRw8v4uSbO-9QWWXxpEER_r1MayAHSEAB9MZZKqjP5Wu5Ng_x9B0rL_8SGSCcAOD54IBgXlPuM-6U_OjfsnTiO_az4Mo_loQPoXqiizSjjSD-rFyCdxotQTZRc3_W_hYgsMmf8RNqUIUaWY2qiIYqJsAzx7lToIDohnGxfwnX6zqYDhJHLHJ849d9RGPWr0swg',
      //     tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
      //     settings: {
      //       panes: {
      //         filters: {
      //           expanded: false,
      //           visible: false
      //         }
      //       },
      //       background: models.BackgroundType.Transparent,
      //     }
      //   }}
  
      //   eventHandlers={
      //     new Map([
      //       ['loaded', function () { console.log('Report loaded'); }],
      //       ['rendered', function () { console.log('Report rendered'); }],
      //       ['error', function (event) { console.log(event.detail); }],
      //       ['visualClicked', () => console.log('visual clicked')],
      //       ['pageChanged', (event) => console.log(event)],
      //     ])
      //   }
  
      //   cssClassName={"bi-embedded"}
  
      //   getEmbeddedComponent={(embeddedReport) => {
      //     window.report = embeddedReport;
      //   }}
      // />
      // </div>
      <div>
        <iframe title="STREAMLINE demo files (1)" width="1140" height="700" src="https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&autoAuth=true&ctid=42af99c6-5a96-4d4d-af48-3317dac88db0" frameborder="0" allowFullScreen="true"></iframe>
      </div>
      
  
    )
  }
  
  export default Home
