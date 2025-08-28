/**
 * Entidad Admin - Representa el núcleo del dominio
 * Esta clase contiene la lógica de negocio fundamental
 */
export class Admin {
    constructor(id, email, name, passwordHash, createdAt = new Date()) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.passwordHash = passwordHash;
        this.createdAt = createdAt;
        this.isActive = true;
        
        // Validación en la entidad
        this.validateEmail();
        this.validateName();
    }
    
    validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
            throw new Error('Email format is invalid');
        }
    }
    
    validateName() {
        if (!this.name || this.name.trim().length < 2) {
            throw new Error('Name must have at least 2 characters');
        }
    }
    
    // Método de dominio - reglas de negocio
    deactivate() {
        this.isActive = false;
    }
    
    activate() {
        this.isActive = true;
    }
    
    // Método para retornar datos seguros (sin password)
    toSecureObject() {
        return {
            id: this.id,
            email: this.email,
            name: this.name,
            createdAt: this.createdAt,
            isActive: this.isActive
        };
    }
    
    // Factory method
    static create(id, email, name, passwordHash) {
        return new Admin(id, email, name, passwordHash);
    }
}
