import React, { useEffect } from "react";
import { connect } from "react-redux";

import { FetchData, CardClicked } from "../Reducer/Actions";
import Card from "./Card";

const List = props => {
  useEffect(() => {
    props.FetchData();
  }, [props.FetchData]);

  return (
    <div>
      Hello :D
      {props.Data && !props.isLoading && (
        <div className="Card-Container">
          {props.Data.map(ele => (
            <Card key={ele.mal_id} item={ele} dispatch={props.CardClicked} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    Data: state.Data,
    err: state.err
  };
};

export default connect(mapStateToProps, { FetchData, CardClicked })(List);
