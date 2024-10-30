

// универсализировать под библиотеку

class CategoryConstructorWithProperties {

    constructor (itDirection) {
        this.itDirection = itDirection;
    }

    set itDirection(value) {
        try {
            if (this.itDirection == ('backend' || 'frontend' || 'other')) {
                this.itDirection == value;
            } else {
                throw new PropertyInstallationError("for the itDirection parameter, only one of these string arguments is used: backend, frontend, other");
            }
        } catch(error) {
            console.log(error)
        }
    }
        
    }




