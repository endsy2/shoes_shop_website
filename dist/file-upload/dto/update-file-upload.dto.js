"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFileUploadDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_file_upload_dto_1 = require("./create-file-upload.dto");
class UpdateFileUploadDto extends (0, mapped_types_1.PartialType)(create_file_upload_dto_1.CreateFileUploadDto) {
}
exports.UpdateFileUploadDto = UpdateFileUploadDto;
//# sourceMappingURL=update-file-upload.dto.js.map