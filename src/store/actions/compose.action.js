/**
 * the useReducer hook from react takes the initialState as
 * one of its parameters. If no param is passed, the initial state
 * would be considered as null which not necessarily wrong but not at
 * all a better practice. It can lead to unknown undefined errors during
 * build time.
 * As defined below, this is the initial state structure considering all
 * the required fields related to the user profile image.
 */
export const initialState = {
  imageDetails: {
    originalDimensions: {
      width: 0,
      height: 0,
    },
    renderDimensions: {
      width: 0,
      height: 0,
    },
    position: {
      x: 0,
      y: 0,
    },
    scale: 1,
    id: "user-profile-image",
    image: null,
  },
};

/**
 * Similar to redux, we are defining all the different types of
 * actions related to image state changes to avoid any errors down
 * the line.
 */
export const CANVAS_ACTIONS = Object.freeze({
  UPLOAD_IMAGE: "IMAGE/UPDATE_IMAGE_DETAILS",
  UPDATE_IMAGE_DIMENSIONS: "IMAGE/UPDATE_IMAGE_RENDER_DIMENSIONS",
  UPDATE_IMAGE_POSITIONS: "IMAGE/UPDATE_IMAGE_POSITIONS",
});