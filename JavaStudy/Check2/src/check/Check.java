package check;

import static java.lang.System.*;
import constants.Constants;
import check.Pet;

public class Check {

    private static String firstName = "fujita";
    private static String lastName = "yuji";

    public static void main(String[] args) {
        out.println(printName("printNameメソッド → " + firstName, lastName));
    }

    private static String printName(String firstName, String lastName) {
        return firstName + lastName;
    }

    Pet instance1 = new Pet(Constants.CHECK_CLASS_JAVA, Constants.CHECK_CLASS_HOGE);
        instance1.introduce();

    RobotPet instance2 = new RobotPet(Constants.CHECK_CLASS_LUKE, Constants.CHECK_CLASS_LUKE);
        instance2.introduce();

}
