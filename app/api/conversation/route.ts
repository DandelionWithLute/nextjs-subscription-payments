import { NextResponse } from 'next/server';
import React from 'react';
import * as z from 'zod';

export const POST = async (request: Request) => {
  const req = await request.json();
  console.log(req);

  // const stringSchema = z.string();
  // const parsedReq = stringSchema.parse(req);
  // console.log(parsedReq);

  const apiKey = process.env.ORIONSTAR_API?.toString();

  // const rst = await fetch('https://openapi.chatmax.net/v1/ctai/ctai_doc_list', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //     //   'orionstar-api-key': process.env.ORIONSTAR_API
  //     'orionstar-api-key': apiKey || ''
  //   },
  //   body: JSON.stringify(req)
  // });
  // if (!rst.ok) {
  //   console.log(
  //     `Server error: [${rst.status}] [${rst.statusText}] [${rst.url}]`
  //   );
  // }
  // const rstJson = await rst.json();
  // console.info('Request Response:', rstJson);
  // console.log(rstJson.data.ctai_doc_list[0]);

  return new NextResponse(
    JSON.stringify('Successfully Fetched Data From Server!'),
    { status: 200 }
  );
};
