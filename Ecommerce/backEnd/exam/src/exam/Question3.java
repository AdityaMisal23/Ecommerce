package exam;

import java.util.Scanner;

public class Question3 {
	public static void printArray(int[][] arr) {
		for(int i=0; i<arr.length; i++) {
			for(int j=0; j<arr.length; j++) {
				System.out.println(arr[i][j] + " ");
			}
			System.out.println();
		}
		System.out.println();
	}
	
	
	public static void backTrack(int[][] arr, int row, int col, int n, int[]rowcheck) {
		if(col>=arr.length) {
			printArray(arr);
			return;
		}
		if(row<0 || row>=n) {
			return;
		}
		if(rowcheck[row]!=0) {
			return;
		}
		
		for(int i=0; i<n; i++) {
			arr[i][col] = 1;
			rowcheck[row] = 1;
			int myRow1 = row-2;
			int myRow2 = row+2;
			while(myRow1>=0) {
				backTrack(arr, myRow1, col+1, n, rowcheck);
				myRow1--;
			}
			
			while(myRow2<=n) {
				backTrack(arr, myRow2, col+1, n, rowcheck);
				myRow2++;
			}
			rowcheck[row] = 0;
			arr[i][col] = 0;
		}
	}
	
	
	public static void solution(int n) {
		int[][] arr = new int[n][n];
		int[] rowheck = new int[n];
		backTrack(arr, 0, 0, n, rowheck);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter number of houses : ");
		int houses = scanner.nextInt();
		
		solution(houses);
	}

}
