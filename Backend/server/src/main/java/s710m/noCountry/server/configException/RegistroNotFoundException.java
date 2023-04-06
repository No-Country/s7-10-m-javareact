package s710m.noCountry.server.configException;

public class RegistroNotFoundException extends Exception{

    public RegistroNotFoundException(){
        super("El registro no existe en la base de datos, vuelva a intentar.");
    }

    public RegistroNotFoundException(String mensaje){
        super(mensaje);
    }
}
