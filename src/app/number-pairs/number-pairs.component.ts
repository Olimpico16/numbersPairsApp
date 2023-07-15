import { Component } from '@angular/core';

@Component({
  selector: 'app-number-pairs',
  templateUrl: './number-pairs.component.html',
  styleUrls: ['./number-pairs.component.scss']
})
export class NumberPairsComponent {
  numbersInput: string = '';
  targetSum: number | null = 0;
  pairs: number[][] = [];
  numbersArray: number[] = [];
  showWarning: boolean = false;

  addNumber() {
    const numberRegex = /^[^a-zA-Z,.]+$/;

    if (numberRegex.test(this.numbersInput)) {
      this.numbersArray.push(Number(this.numbersInput));
      this.numbersInput = '';
      this.showWarning = false;
    } else {
      this.showWarning = true;
      this.numbersInput = '';
    }
  }

  removeNumber(index: number) {
    this.numbersArray.splice(index, 1);
  }

  findPairs(): void {
    const numbersArray = this.numbersArray.map(num => +num);
    this.pairs = this.findNumberPairs(numbersArray, this.targetSum || 0);
  }

  private findNumberPairs(numbers: number[], targetSum: number): number[][] {
    const pairs: number[][] = [];

    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === targetSum) {
          pairs.push([numbers[i], numbers[j]]);
        }
      }
    }

    return pairs;
  }
}
