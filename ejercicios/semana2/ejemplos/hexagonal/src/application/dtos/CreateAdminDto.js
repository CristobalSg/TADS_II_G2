/**
 * DTO para crear un nuevo administrador
 */
export class CreateAdminDto {
    constructor(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
        
        this.validate();
    }
    
    validate() {
        if (!this.email) {
            throw new Error('Email is required');
        }
        
        if (!this.name) {
            throw new Error('Name is required');
        }
        
        if (!this.password) {
            throw new Error('Password is required');
        }
        
        if (this.password.length < 6) {
            throw new Error('Password must be at least 6 characters');
        }
    }
}
