class SlotMachine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const isWinner = (s1 === s2) && (s2 === s3);

        const styles = {fontSize: "32px", backgroundColor: "purple"}

        return (
            <div className="SlotMachine">
                <p style={styles}>{s1}{s2}{s3}</p>
                <p className={isWinner ? 'SlotMachine-Winner' : 'SlotMachine-Loser'}>{isWinner ? 'Winner!' : 'Looser!'}</p>
            </div>
        );
    }
}