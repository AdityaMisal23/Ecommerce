package exam;

import java.util.ArrayList;
import java.util.Scanner;

public class MyClass {
	
	public static int solution(int row, int column) {
		//creating a data structure to store the values
		ArrayList<ArrayList<Integer>> arrayList = new ArrayList<ArrayList<Integer>>();
		
		//addding first two rows in it 
		ArrayList<Integer> arrayList2 = new ArrayList<Integer>();
		arrayList2.add(1);
		ArrayList<Integer> arrayList3 = new ArrayList<Integer>();
		arrayList3.add(1);
		arrayList3.add(1);
		
		arrayList.add(arrayList2);
		arrayList.add(arrayList3);
		
		//adding remaining rows to it
		for(int i=2; i<=row; i++) {
			ArrayList<Integer> temp = arrayList.get(i-1);
			ArrayList<Integer> current = new ArrayList<Integer>();
			current.add(1);
			for(int j=0; j<temp.size()-1; j++) {
				current.add(temp.get(j)+temp.get(j+1));
			}
			current.add(1);
			arrayList.add(current);
		}
		
		//returning the ans
		System.out.println(arrayList);
		if(column>arrayList.get(row).size()) {
			return -1;
		}
		return arrayList.get(row-1).get(column-1);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Enter Row number : ");
		int row = scanner.nextInt();
		
		System.out.println("Enter Column number : ");
		int column = scanner.nextInt();
		
		System.out.print(solution(row, column));
		
		

	}

}
