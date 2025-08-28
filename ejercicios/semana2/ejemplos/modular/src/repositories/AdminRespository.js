class AdminRepository {
    constructor() {
        this.admins = []; // Simulando base de datos
    }
    
    async save(admin) {
        this.admins.push(admin);
        return admin;
    }

    async findByEmail(email) {
        return this.admins.find(a => a.email === email);
    }
    
    async findByTenant(tenantId) {
        return this.admins.filter(a => a.tenantId === tenantId);
    }
    
    findAll() {
        return this.admins;
    }
}

export { AdminRepository };