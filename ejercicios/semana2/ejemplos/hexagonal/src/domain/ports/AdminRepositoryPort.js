/**
 * Puerto de salida - Interface para el repositorio de administradores
 * Define el contrato que debe cumplir cualquier implementación de persistencia
 */
export class AdminRepositoryPort {
    async save(admin) {
        throw new Error('Method not implemented');
    }
    
    async findById(id) {
        throw new Error('Method not implemented');
    }
    
    async findByEmail(email) {
        throw new Error('Method not implemented');
    }
    
    async findAll() {
        throw new Error('Method not implemented');
    }
    
    async delete(id) {
        throw new Error('Method not implemented');
    }
    
    async update(admin) {
        throw new Error('Method not implemented');
    }
}
