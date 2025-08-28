/**
 * DTO de respuesta para administrador
 */
export class AdminResponseDto {
    constructor(admin) {
        this.id = admin.id;
        this.email = admin.email;
        this.name = admin.name;
        this.createdAt = admin.createdAt;
        this.isActive = admin.isActive;
    }
    
    static fromDomain(admin) {
        return new AdminResponseDto(admin);
    }
    
    static fromDomainList(admins) {
        return admins.map(admin => new AdminResponseDto(admin));
    }
}
