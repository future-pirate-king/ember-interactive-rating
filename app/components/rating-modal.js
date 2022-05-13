import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RatingModalComponent extends Component {
  @tracked ratings = [
    { value: 1, selected: false },
    { value: 2, selected: false },
    { value: 3, selected: false },
    { value: 4, selected: false },
    { value: 5, selected: false },
  ];

  @tracked ratingSubmitted = false;
  @tracked submittedRating;

  @action ratingClicked(event) {
    const { selected, rating } = event.target.dataset;

    // checked already selected
    if (selected === '') return;

    this.ratings = this.ratings.map((r) => ({
      ...r,
      selected: rating === `${r.value}`,
    }));
  }

  @action submitClicked() {
    const selectedRating = this.ratings.find((r) => r.selected);

    if (selectedRating) {
      this.ratingSubmitted = true;
      this.submittedRating = selectedRating.value;
    } else {
      alert('select a rating to submit!');
    }
  }
}
