import { AdminRepositoryPort } from '../../domain/ports/AdminRepositoryPort.js';

/**
 * Adaptador de infraestructura - Implementación en memoria del repositorio
 * Implementa el puerto AdminRepositoryPort
 */
export class InMemoryAdminRepository extends AdminRepositoryPort {
    constructor() {
        super();
        this.admins = new Map(); // Usamos Map para mejor rendimiento
    }
    
    async save(admin) {
        this.admins.set(admin.id, admin);
        return admin;
    }
    
    async findById(id) {
        return this.admins.get(id) || null;
    }
    
    async findByEmail(email) {
        for (const admin of this.admins.values()) {
            if (admin.email === email) {
                return admin;
            }
        }
        return null;
    }
    
    async findAll() {
        return Array.from(this.admins.values());
    }
    
    async delete(id) {
        const admin = this.admins.get(id);
        if (admin) {
            this.admins.delete(id);
            return admin;
        }
        return null;
    }
    
    async update(admin) {
        if (this.admins.has(admin.id)) {
            this.admins.set(admin.id, admin);
            return admin;
        }
        throw new Error('Admin not found for update');
    }
    
    // Método auxiliar para debugging
    getStats() {
        return {
            totalAdmins: this.admins.size,
            adminIds: Array.from(this.admins.keys())
        };
    }
}
