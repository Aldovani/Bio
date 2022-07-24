import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet } from "google-spreadsheet";

const endpoint = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const googleSpreadsheet = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID
    );

    await googleSpreadsheet.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SHEET_EMAIL,
      private_key: process.env.GOOGLE_SHEET_KEY.replace(/\\n/g, "\n"),
    });
    await googleSpreadsheet.loadInfo();
    const sheet = googleSpreadsheet.sheetsByIndex[0];

    const data = request.body;

    await sheet.addRow({
      email: data.email,
      subject: data.subject,
      message: data.message,
    });

    response.status(200).json({ ok: true });
  } catch (e) {
    console.log(e);
    response.status(404).json({ ok: true });
  }
};
export default endpoint;
