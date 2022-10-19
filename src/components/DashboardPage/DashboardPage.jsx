// Style imports
import { Link } from '../Link/Link.jsx'
import styles from './DashboardPage.module.scss'





/**
 * The home page.
 */
export function DashboardPage() {
	return (
		<section className={styles['dashboard-page']}>
			<table>
				<thead>
					<tr>
						<th scope={'col'}>
							{'Scene Name'}
						</th>

						<th scope={'col'}>
							{'Link'}
						</th>

						<th scope={'col'}>
							{'Includes Guest'}
						</th>

						<th scope={'col'}>
							{'Includes Chat'}
						</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<th scope={'row'}>
							{'Starting Soon'}
						</th>
						<td scope={'row'}>
							<Link href={'/starting-soon'}>
								{'link'}
							</Link>
						</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<th scope={'row'}>
							{'Be Right Back'}
						</th>
						<td scope={'row'}>
							<Link href={'/be-right-back'}>
								{'link'}
							</Link>
						</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<th scope={'row'}>
							{'Thanks For Watching'}
						</th>
						<td scope={'row'}>
							<Link href={'/thanks-for-watching'}>
								{'link'}
							</Link>
						</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<th
							rowSpan={2}
							scope={'row'}>
							{'1-up'}
						</th>
						<td>
							<Link href={'/1-up'}>
								{'link'}
							</Link>
						</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>
							<Link href={'/1-up?enableChat=1'}>
								{'link'}
							</Link>
						</td>
						<td></td>
						<td>✅</td>
					</tr>

					<tr>
						<th
							rowSpan={2}
							scope={'row'}>
							{'2-up'}
						</th>
						<td>
							<Link href={'/2-up'}>
								{'link'}
							</Link>
						</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>
							<Link href={'/2-up?enableChat=1'}>
								{'link'}
							</Link>
						</td>
						<td></td>
						<td>✅</td>
					</tr>

					<tr>
						<th
							rowSpan={4}
							scope={'row'}>
							{'Screen Share'}
						</th>
						<td>
							<Link href={'/screen-share'}>
								{'link'}
							</Link>
						</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>
							<Link href={'/screen-share?enableGuest=1'}>
								{'link'}
							</Link>
						</td>
						<td>✅</td>
						<td></td>
					</tr>

					<tr>
						<td>
							<Link href={'/screen-share?enableChat=1'}>
								{'link'}
							</Link>
						</td>
						<td></td>
						<td>✅</td>
					</tr>

					<tr>
						<td>
							<Link href={'/screen-share?enableChat=1&enableGuest=1'}>
								{'link'}
							</Link>
						</td>
						<td>✅</td>
						<td>✅</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

DashboardPage.title = 'Dashboard'
