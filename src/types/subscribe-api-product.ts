import { TApiMethodOption } from "./api-method-option"
import { IReceiptsCancelPayload } from "./receipts-cancel-payload";
import { IReceiptsCancelResponse } from "./receipts-cancel-response";
import { IReceiptsCheckPayload } from "./receipts-check-payload";
import { IReceiptsCheckResponse } from "./receipts-check-response";
import { IReceiptsCreatePayload } from "./receipts-create-payload";
import { IReceiptsPayPayload } from "./receipts-pay-payload";
import { IReceiptsPayResponse } from "./receipts-pay-response";
import { IReceiptsSendPayload } from "./receipts-send-payload";
import { IReceiptsSendResponse } from "./receipts-send-response";
import { IReceiptsGetPayload } from "./receipts-get-payload";
import { IReceiptsGetAllPayload } from "./receipts-get-all-payload";
import { IReceiptsSetFiscalDataPayload } from "./receipts-set-fiscal-data";
import { IReceiptsSetFiscalDataResponse } from "./receipts-set-fiscal-data-response";
import { IReceiptsCreateResponse } from "./receipts-create-response";
import { IReceiptsGetResponse } from "./receipts-get-response";
import { IReceiptsGetAllResponse } from "./receipts-get-all-response";

export interface ISubscribeApiProduct {
    methodName: TApiMethodOption;
    setSecretKey(secret: string): void;
    setPaymeId(id: string): void;
    setPaymeApiURL(value: "dev" | "production"): void;
    paymeApiURL: string;

    // API methods
    receiptsCreate(payload: IReceiptsCreatePayload): Promise<IReceiptsCreateResponse>
    receiptsPay(payload: IReceiptsPayPayload): Promise<IReceiptsPayResponse>
    receiptsSend(payload: IReceiptsSendPayload): Promise<IReceiptsSendResponse>
    receiptsCancel(payload: IReceiptsCancelPayload): Promise<IReceiptsCancelResponse>
    receiptsCheck(payload: IReceiptsCheckPayload): Promise<IReceiptsCheckResponse>
    receiptsGet(payload: IReceiptsGetPayload): Promise<IReceiptsGetResponse>
    receiptsGetAll(payload: IReceiptsGetAllPayload): Promise<IReceiptsGetAllResponse>
    receiptsSetFiscalData(payload: IReceiptsSetFiscalDataPayload): Promise<IReceiptsSetFiscalDataResponse>
}