import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  "button": {
    backgroundColor: "#4dd0e1",
    color: "#fff",
    fontSize: 16,
    height: 40,
    marginBottom: 16,
    width: 256,
  }
})

const PrimaryButton = (props) => {
  return (
    <Button variant={'contained'} onClick={() => props.onClick()}>
      {props.label}
    </Button>
  )
}

export default PrimaryButton
