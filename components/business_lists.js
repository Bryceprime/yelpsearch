import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import BusinessCard from './business_card';


export default function business_list(props) {
  let {
    business
  } = props;

  return (
    <List>
      {business.map((business) => {
        return (
          <BusinessCard name={business.name} ratings={business.rating}>
          </BusinessCard>
        )
      })}
    </List>
  )
}