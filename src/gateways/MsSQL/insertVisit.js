import { statusToId, SCHEDULED } from "../../helpers/visitStatus";
import logger from "../../../logger";

const insertVisitGateway = async (db, visit, departmentId) => {
  try {
    //patient name is now part of the same table, as is the recipient name
    const result = await db
      .request()
      .input("patient_name", visit.patientName)
      .input("call_time", visit.callTime)
      .input("recipient_name", visit.contactName)
      .input("recipient_number", visit.contactNumber)
      .input("recipient_email", visit.callEmail)
      .input("department_id", departmentId)
      .input("status", statusToId(SCHEDULED))
      .query(
        `insert into dbo.[scheduled_call]
          ([patient_name], [call_time], [recipient_name], [recipient_number], [recipient_email], [department_id], [status])
          output inserted.id
          values (@patient_name, @call_time, @recipient_name, @recipient_number, @recipient_email, @department_id, @status)`
      );

    return {
      id: result.recordset[0].id,
      error: null,
    };
  } catch (error) {
    logger.error(`Error creating visit ${visit}, ${error}`);
    return {
      user: null,
      error: error.toString(),
    };
  }
};

export default insertVisitGateway;
