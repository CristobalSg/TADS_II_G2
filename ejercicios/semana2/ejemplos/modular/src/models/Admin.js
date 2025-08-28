class Admin {
    constructor(id, email, name, passwordHash, createdAt = new Date()) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.passwordHash = passwordHash;
        this.createdAt = createdAt;
    }
    
    // Método para retornar sin password
    toSafe() {
        return {
            id: this.id,
            email: this.email,
            name: this.name,
            createdAt: this.createdAt
        };
    }
}

export default Admin;