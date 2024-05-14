import React from "react";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import "./Spinner.css";

type Props = {
  isLoading?: boolean;
};

export const Spinner = ({ isLoading = true }: Props) => {
  return (
    <div id="loading-spinner" className={isLoading ? "loading" : ""}>
      <ClipLoader
        color="white"
        loading={isLoading}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <FontAwesomeIcon icon={faRocket} className="rocket-icon" />
    </div>
  );
};
