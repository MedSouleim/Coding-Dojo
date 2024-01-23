import java.util.Date;
public class AlfredQuotes {

    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }

    public String guestGreeting(String name) {

        return String.format("Hello, %s Lovely to see you.", name) ;
    }

    public String dateAnnouncement() {
        Date currentDate = new Date();
        return "It is currently " + currentDate.toString();
    }

    public String respondBeforeAlexis(String conversation) {
        if (conversation.indexOf("Alexis") > -1){
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        }else if (conversation.indexOf("Alfred") > -1){
            return "At your service. As you wish, naturally.";
        }else {
            return "Right. And with that I shall retire.";
        }
    }
}