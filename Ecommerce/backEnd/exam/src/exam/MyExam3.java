package exam;

import java.util.Scanner;

public class MyExam3 {

	public static void mySolution(int n) {
		int var=n/2;
		for(int i=n; i>=0; i--) {
			if(i>n/2) {
				for(int j= var; j>0; j--) {
					System.out.print("*");
					
				}
				for(int k=0; k<((n-i)*2)+1; k++) {
					System.out.print(" ");
				}
				for(int l=var; l>0; l--) {
					System.out.print("*");
				}
				var--;
				if(i!=(n/2)+1) {
					System.out.println();
				}
			}
			else {
				for(int j=i; j<n/2;j++) {
					System.out.print("*");
				}
				for(int k=0; k<(i*2)+1; k++) {
					System.out.print(" ");
				}
				for(int l=i; l<n/2; l++) {
					System.out.print("*");
				}
				System.out.println();
			}
		}
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter thr limit of your pattern : ");
		int n = scanner.nextInt();
		
		mySolution(n);

	}

}
