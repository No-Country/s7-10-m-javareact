package s710m.noCountry.server.configException;

public class RegistroFoundException extends Exception{

    public RegistroFoundException(){
        super("El registro ya existe en la base de datos, vuelva a intentar.");
    }

    public RegistroFoundException(String mensaje){
        super(mensaje);
    }

}
