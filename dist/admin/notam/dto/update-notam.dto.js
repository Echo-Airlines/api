"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotamDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_notam_dto_1 = require("./create-notam.dto");
class UpdateNotamDto extends (0, mapped_types_1.PartialType)(create_notam_dto_1.CreateNotamDto) {
    Title;
    Content;
    ExpirationDate;
    Link;
    EffectiveDate;
    Status;
}
exports.UpdateNotamDto = UpdateNotamDto;
//# sourceMappingURL=update-notam.dto.js.map