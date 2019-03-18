package opgave02;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class TestFlettesortering {

	private static int listSize = 10000000;

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println("Mergesort thread test with list size: " + listSize);
		System.out.println("Testing lone...");
		performTest(true);
		System.out.println("Testing threaded...");
		performTest(false);
	}

	private static void performTest(boolean loneTest) {
		List<Integer> list = new ArrayList<Integer>();
		Random r=new Random();
		for (int i=0;i<listSize;i++) {
			list.add(Math.abs(r.nextInt()%10000));
		};

		//System.out.println(list);

		FletteSortering sortA = new FletteSortering(list, 0, list.size() / 2 - 1);
		FletteSortering sortB = new FletteSortering(list, list.size() / 2, list.size() - 1);
		FletteSortering sortLone = new FletteSortering(list, 0, list.size() - 1);

		long l1,l2;
		l1 = System.nanoTime();
		try {
			if (loneTest) {
				sortLone.start();
				sortLone.join();
			} else {
				sortA.start();
				sortB.start();
				sortA.join();
				sortB.join();
				merge(list, 0, (list.size() + 1) / 2, list.size() - 1);
			}
		} catch (InterruptedException e) {
			System.out.println("InterruptedException when joining mergesort threads.");
		}
		l2 = System.nanoTime();

		System.out.println();
		System.out.println("Køretiden var " + (l2-l1)/1000000);
		System.out.println();

		//System.out.println(list);
	}

	private static void merge(List<Integer> list, int low, int middle, int high) {
		List<Integer> temp = new ArrayList<Integer>();
		int i = low;
		int j = middle+1;
		while (i<=middle && j<=high){
			if (list.get(i).compareTo(list.get(j))<=0){
				temp.add(list.get(i));
				i++;
			}
			else {
				temp.add(list.get(j));
				j++;
			}

		}
		while(i<=middle){
			temp.add(list.get(i));
			i++;
		}
		while(j<=high){
			temp.add(list.get(j));
			j++;
		}
		for (int k=0; k<temp.size();k++){
			list.set(low+k,temp.get(k));
		}
	}

}
