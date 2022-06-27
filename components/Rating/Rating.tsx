import { useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';

import { RatingProps } from './Rating.props';

import StarIcon from './star.svg';
import styles from './Rating.module.css';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <StarIcon
        key={i}
        className={cn(styles.star, { [styles.filled]: i < currentRating, [styles.editable]: isEditable })}
        onMouseEnter={() => handleDisplayChange(i + 1)}
        onMouseLeave={() => handleDisplayChange(rating)}
        onClick={() => handleRatingIconClick(i + 1)}
        tabIndex={isEditable ? 0 : -1}
        onKeyDown={(evt: KeyboardEvent<SVGAElement>) => isEditable && handleSpaceKeyDown(evt, i + 1)}
      />
    ));

    setRatingArray(updatedArray);
  };

  const handleDisplayChange = (rating: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(rating);
  };

  const handleRatingIconClick = (rating: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(rating);
  };

  const handleSpaceKeyDown = (evt: KeyboardEvent<SVGAElement>, i: number) => {
    if (evt.code !== 'Space' || !setRating) {
      return;
    }

    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
