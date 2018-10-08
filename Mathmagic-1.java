public class Magic {
	public static void main(String[] args) {

    int myNumber = 100;
    //this is the original number;//
    
    int stepOne = myNumber * myNumber;
    
		int stepTwo = stepOne + myNumber;
    
    int stepThree= stepTwo / myNumber;
    
    int stepFour = stepThree + 17;
    
    int stepFive= stepFour - myNumber;
    
    int stepSix = stepFive / 6;

    System.out.println( stepSix);

    // output will remain 3 no matter the value of the original number//
	}
}